@extends('layouts.app')

@section('title') show all posts @endsection

@section('content')
<section>
    <div class="container w-75 p-5 border shadow-lg rounded-5" style="margin-top: 100px;">
        <div class="row d-flex justify-content-center align-items-center">
            <div class="col col-lg-12 text-center">
                <h1 class="mb-5">Table of posts</h1>
                <table class="table table-bordered" id="users">
                    <thead>
                        <tr>
                            <th scope="col">ID</th>
                            <th scope="col">Title</th>
                            <th scope="col">Posted By</th>
                            <th scope="col">Created At</th>
                            <th scope="col">Actions</th>
                        </tr>
                    <tbody>
                        @foreach ($posts as $post)
                            <tr>
                                <td>{{ $post['id'] }}</td>
                                <td>{{ $post['title'] }}</td>
                                <td>{{ $post['posted_by'] }}</td>
                                <td>{{ $post['created_at'] }}</td>
                                <td class="py-3">
                                    <a href="{{ route('posts.show', $post['id']) }}"
                                        class="btn create-button text-white" style="background-color: #718470;">View</a>
                                    <a href="#" class="btn create-button text-white"
                                        style="background-color: #718470;">Edit</a>
                                    <a href="#" class="btn btn-danger">Delete</a>
                                </td>
                            </tr>
                        @endforeach

                    </tbody>
                    </thead>
                </table>
                <div class="mt-5">
                    <a class="btn text-white d-inline px-5 create-button" style="background-color: #718470;"
                        type="button" href="{{ route('posts.create')}}">Create Post</a>
                </div>
            </div>
        </div>
    </div>
</section>
@endsection