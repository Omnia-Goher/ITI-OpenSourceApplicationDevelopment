@extends('layouts.app')

@section('title')
    show all posts
@endsection

@section('content')
    <section class="mb-5">
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
                                    <td>{{ $post->id }}</td>
                                    <td>{{ $post->slug }}</td>
                                    <td>{{ $post->user->name }}</td>
                                    <td>{{ $post->created_at->format('Y-m-d') }}</td>
                                    <td class="py-3">
                                        <a href="{{ route('posts.show', $post->id) }}" class="btn create-button text-white"
                                            style="background-color: #718470;">View</a>
                                        <a href="{{ route('posts.edit', $post->id) }}" class="btn create-button text-white"
                                            style="background-color: #718470;">Edit</a>
                                        @if (Auth::check())
                                            <button type="button" class="btn btn-danger" data-bs-toggle="modal"
                                                data-bs-target="#modal{{ $post->id }}">
                                                Delete
                                            </button>
                                        @else
                                            <a type="button" class="btn btn-danger" href="{{ url('login')}}">Delete</a>
                                        @endif
                                    </td>
                                </tr>
                                <!-- Modal -->
                                <div class="modal fade" id="modal{{ $post->id }}" tabindex="-1"
                                    aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-centered">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <h5 class="modal-title" id="exampleModalLabel">Delete Alarm</h5>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal"
                                                    aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body">
                                                Do you want to Delete your post?
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary"
                                                    data-bs-dismiss="modal">No</button>
                                                <form action="{{ route('posts.destroy', $post->id) }}" method="POST">
                                                    @method('DELETE')
                                                    @csrf
                                                    <button type="submit" class="btn btn-danger">Yes</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            @endforeach

                        </tbody>
                        </thead>
                    </table>
                    {{-- Pagination --}}
                    <div class="d-flex justify-content-center mt-5">
                        {!! $posts->links("pagination::bootstrap-5") !!}
                    </div>
                    <div class="mt-5">
                        <a class="btn text-white d-inline px-5 create-button" style="background-color: #718470;"
                            type="button" href="{{ route('posts.create') }}">Create Post</a>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <script>
       
       document.querySelector('.small').style.display = "none";
       var a = document.querySelectorAll('.page-link')
       a.forEach(e => {
        e.style.color = "#718470"
      });
      var el = document.getElementsByClassName('active')[0].getElementsByClassName("page-link")
      el[0].style.backgroundColor = "#718470"
      el[0].style.borderColor = "#718470"
      el[0].style.color = "white"
    </script>
@endsection
