@extends('layouts.app')

@section('title')
    create post
@endsection

@section('content')
    <section>
        <div class="container w-75 p-5 border shadow-lg rounded-5" style="margin-top: 100px;">
            <h1 class="mb-5 text-center">Create Post</h1>
            <form action="{{ route('posts.store') }}" method="POST" class="border shadow-sm rounded-3 p-5" enctype="multipart/form-data">
                @csrf
                <div class="mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input name="title" type="text" class="form-control" id="title" value="{{ old('title') }}">
                </div>
                <div class="mb-3">
                    <label for="description" class="form-label">Description</label>
                    <textarea name="description" class="form-control" id="description" rows="3">{{ old('description') }}</textarea>
                </div>
                <div class="mb-3">
                    <label for="image" class="form-label">Upload Image for Your post</label>
                    <input name="image" class="form-control" type="file" id="image" accept=".jpg,.png">
                </div>

                <select name="post_creator" class="form-select mb-3 mt-4" aria-label="Default select example">
                    <option selected>Select User</option>
                    @foreach ($users as $user)
                        <option value="{{ $user->id }}">{{ $user->name }}</option>
                    @endforeach
                </select>

                <button type="submit" class="btn text-white px-5 mt-3 create-button" style="background-color: #718470">Submit</button>
            </form>

            @if ($errors->any())
                <div class="alert alert-danger mt-4">
                    <ul>
                        @foreach ($errors->all() as $error)
                            <li>{{ $error }}</li>
                        @endforeach
                    </ul>
                </div>
            @endif
        </div>
    </section>

@endsection
