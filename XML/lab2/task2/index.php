<?php
session_start();

$file = "employees.xml";
$file_content = file_get_contents($file);
$doc = new DOMDocument();
$doc->preserveWhiteSpace = false;
$doc->loadXML($file_content);

$elementsLength = $doc->getElementsByTagName("employee")->length;

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if ($_POST["action"] === "Add") {
        $employee_node = $doc->createElement('employee');

        $employee_name = $doc->createElement('name');
        $employee_name_text = $doc->createTextNode($_POST['name']);
        $employee_name->appendChild($employee_name_text);

        $employee_email = $doc->createElement('email');
        $employee_email_text = $doc->createTextNode($_POST['email']);
        $employee_email->appendChild($employee_email_text);

        $employee_phone = $doc->createElement('phone');
        $employee_phone_text = $doc->createTextNode($_POST['phone']);
        $employee_phone->appendChild($employee_phone_text);

        $employee_node->append($employee_name, $employee_email, $employee_phone);

        $root = $doc->documentElement;
        $root->appendChild($employee_node);

        $doc->save($file);
    }

    $index = $_SESSION["index"];

    if ($_POST["action"] === "Next" && $index < $elementsLength - 1) {
        $_SESSION["index"] += 1;
    }

    if ($_POST["action"] === "Prev" && $index > 0) {
        $_SESSION["index"] -= 1;
    }
}

$index = $_SESSION["index"];
$employees = $doc->documentElement;
$employee = $employees->childNodes[$index];
$name = $employee->childNodes[0]->nodeValue;
$email = $employee->childNodes[1]->nodeValue;
$phone = $employee->childNodes[2]->nodeValue;

require_once("views/view.php");
