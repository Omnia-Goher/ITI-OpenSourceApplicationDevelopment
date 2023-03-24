@extends('layouts.app')

@section('title')
    Login Form
@endsection

@section('content')
<section>
    <div class="container w-50 p-5 border shadow-lg rounded-5" style="margin-top: 150px;">
        <h1 class="mb-5 text-center">Login Form</h1>
        <form class="border shadow-sm rounded-3 p-5 m-auto" method="POST" action="{{ route('login') }}">
            @csrf
            <div class="mb-3">
                <label for="email" class="form-label">{{ __('Email Address') }}</label>
                <input id="email" type="email" class="form-control @error('email') is-invalid @enderror" name="email" value="{{ old('email') }}" required autocomplete="email" autofocus>
                @error('email')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>

            <div class="mb-3">
                <label for="password" class="form-label">{{ __('Password') }}</label>
                <input id="password" type="password" class="form-control @error('password') is-invalid @enderror" name="password" required autocomplete="current-password">
                @error('password')
                    <span class="invalid-feedback" role="alert">
                        <strong>{{ $message }}</strong>
                    </span>
                @enderror
            </div>

            <div class="mb-3">
                <input class="form-check-input" type="checkbox" name="remember" id="remember" {{ old('remember') ? 'checked' : '' }}>
                <label class="form-check-label" for="remember">
                    {{ __('Remember Me') }}
                </label>
            </div>

            <div class="mb-3 d-flex justify-content-center">
                <button type="submit" class="btn text-white px-5 mt-3 create-button" style="background-color: #718470">{{ __('Login') }}</button>
                @if (Route::has('password.request'))
                    <a class="btn btn-link mt-3" style="color: #718470" href="{{ route('password.request') }}">
                        {{ __('Forgot Your Password?') }}
                    </a>
                @endif
            </div>

        </form>

        
    </div>
</section>

@endsection
