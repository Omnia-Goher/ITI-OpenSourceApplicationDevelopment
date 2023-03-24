<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css">
    <style>
        h1 {
            color: #718470
        }

        .create-button:hover {
            background-color: #7184709e !important;

        }
    </style>
    <title>@yield('title')</title>
</head>

<body>
    <nav class="navbar fixed-top navbar-expand-lg bg-light shadow-lg">
        <div class="container-fluid px-5">
            <a class="navbar-brand" href="#">ITI Blog</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse d-flex" id="navbarNav">
                <ul class="navbar-nav flex-grow-1">
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="{{ route('posts.index') }}">All Posts</a>
                    </li>
                </ul>
                <ul class="navbar-nav">
                    @if (Auth::check())
                    <li class="nav-item dropdown" style="margin-right: 50px">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                          {{Auth::user()->name}}
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="{{ route('logout') }}">Logout</a></li>
                        </ul>
                    </li>
                    @else
                    <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="{{ url('/login') }}">Login</a>
                    </li>
                     <li class="nav-item">
                        <a class="nav-link" aria-current="page" href="{{ url('/register') }}">Register</a>
                    </li>
                    @endif
                </ul>
            </div>
        </div>
    </nav>


    @yield('content')

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
</body>

</html>
