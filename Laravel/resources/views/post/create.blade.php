@extends('layouts.app')

@section('title') create post @endsection

@section('content')
<section>
    <div class="container w-75 p-5 border shadow-lg rounded-5" style="margin-top: 100px;">
        <h1 class="mb-5 text-center">Create Post</h1>
        <form  action="{{route('posts.store')}}" method="POST" class="border shadow-sm rounded-3 p-5">
            @csrf
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title">
            </div>
            <div class="mb-3">
                <label for="Description" class="form-label">Description</label>
                <textarea class="form-control" id="Description" rows="3"></textarea>
            </div>

            <select class="form-select mb-3" aria-label="Default select example">
                <option selected>Ahmed</option>
                <option value="1">Mohamed</option>
                <option value="2">Omnia</option>
                <option value="3">Eman</option>
            </select>

            <button type="submit" class="btn text-white px-5 mt-3" style="background-color: #718470">Submit</button>
        </form>
    </div>
</section>
@endsection
