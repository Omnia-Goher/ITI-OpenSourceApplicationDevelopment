<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PostController extends Controller
{
    protected $allPosts;

    public function __construct()
    {
        $this->allPosts = [
            [
                'id' => 1,
                'title' => 'Laravel',
                'posted_by' => 'Ahmed',
                'created_at' => '2022-08-01 10:00:00'
            ],

            [
                'id' => 2,
                'title' => 'PHP',
                'posted_by' => 'Mohamed',
                'created_at' => '2022-08-01 10:00:00'
            ],

            [
                'id' => 3,
                'title' => 'Javascript',
                'posted_by' => 'Ali',
                'created_at' => '2022-08-01 10:00:00'
            ],
        ];
    }
    public function index()
    {
        return view('post.index', ['posts' =>  $this->allPosts]);
    }

    public function create()
    {

        return view('post.create');
    }

    public function show($id)
    {
        if (is_numeric($id)) {
            $post =  [
                'id' => 3,
                'title' => 'Javascript',
                'posted_by' => 'Ali',
                'created_at' => '2022-08-01 10:00:00',
                'description' => 'hello description',
            ];

            return view('post.show', ['post' => $post]);
        }
        //dd($id);
    }

    public function store()
    {
        return redirect()->route('posts.index');
    }
}
