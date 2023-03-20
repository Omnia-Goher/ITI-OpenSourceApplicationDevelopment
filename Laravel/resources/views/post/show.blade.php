@extends('layouts.app')

@section('title')
    view post details
@endsection

@section('content')
    <section>
        <div class="container w-75 p-5 border shadow-lg rounded-5" style="margin-top: 100px;">
            <h1 class="mb-5 text-center">Post Details</h1>
            <div class="card border rounded-3 m-5">
                <div class="card-header fs-4">
                    Post Info
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p><cite title="Source Title">{{ $post->title }}</cite></p>
                        <footer class="blockquote-footer">Description : <cite
                                title="Source Title">{{ $post->description }}</cite></footer>
                    </blockquote>
                </div>
            </div>
            <div class="card border rounded-3 m-5">
                <div class="card-header fs-4">
                    Post Creator Info
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>Name : <cite title="Source Title">{{ $post->user->name }}</cite> </p>
                        <p>Email : <cite title="Source Title">{{ $post->user->email }}</cite> </p>
                        <p>Created At : <cite title="Source Title">{{ $post->created_at->format('l, F j, Y h:i A') }}</cite>
                        </p>
                    </blockquote>
                </div>
            </div>
            <div class="card border rounded-3 m-5">
                <div class="card-header fs-4">
                    Comments
                </div>
                
                @if($comments->isEmpty())
                <p class="text-center fs-5 mt-5">Add Comment</p>
                @endif
                
                @foreach ($comments as $comment)
                    <div class="card-body">
                        <blockquote class="blockquote mb-0">
                            <p><cite title="Source Title">{{ $comment->user->name }}</cite></p>
                            <footer class="blockquote-footer"><cite title="Source Title">{{ $comment->body }}</cite>
                            </footer>
                        </blockquote>
                        <div class="d-flex justify-content-end">
                            <button class="btn create-button text-white btn-sm me-2" style="background-color: #718470;"
                                data-bs-toggle="modal" data-bs-target="#edit{{ $comment->id }}">Edit</button>
                            <button type="button" class="btn btn-danger btn-sm" data-bs-toggle="modal"
                                data-bs-target="#delete{{ $comment->id }}">
                                Delete
                            </button>
                        </div>
                    </div>
                    <!--Delete Modal -->
                    <div class="modal fade" id="delete{{ $comment->id }}" tabindex="-1"
                        aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Delete Alarm</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    Do you want to Delete your comment?
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                    <form action="{{ route('comments.destroy', $comment->id) }}" method="POST">
                                        @method('DELETE')
                                        @csrf
                                        <button type="submit" class="btn btn-danger">Yes</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- Edit Modal -->
                    <div class="modal fade" id="edit{{ $comment->id }}" tabindex="-1" aria-labelledby="exampleModalLabel"
                        aria-hidden="true">
                        <div class="modal-dialog modal-dialog-centered">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h5 class="modal-title" id="exampleModalLabel">Edit Comment</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <form action="{{ route('comments.update', $comment->id) }}" method="POST">
                                    @csrf
                                    <div class="modal-body">
                                        <div class="mb-3">
                                            <label for="postId" class="form-label">Post ID</label>
                                            <input name="postId" class="form-control" id="postId"
                                                value="{{ $post->id }}" readonly>
                                        </div>
                                        <div class="mb-3">
                                            <label for="body" class="form-label">Type whats on your mind..</label>
                                            <textarea name="body" class="form-control" id="body" rows="3">{{ $comment->body }}</textarea>
                                        </div>
                                        <select name="comment_creator" class="form-select mb-3"
                                            aria-label="Default select example">
                                            <option selected>Change User</option>
                                            @foreach ($users as $user)
                                                <option value="{{ $user->id }}">{{ $user->name }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                        <button type="submit" class="btn text-white"
                                            style="background-color: #718470">Edit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                @endforeach
                {{-- Pagination --}}
                <div class="d-flex justify-content-center mt-5">
                    {!! $comments->links('pagination::bootstrap-5') !!}
                </div>
            </div>
            <div class="d-flex justify-content-end mt-5 pe-5">
                <button type="button" class="btn text-white d-inline px-5 create-button"
                    style="background-color: #718470;" data-bs-toggle="modal" data-bs-target="#addComment">
                    Add new Comment
                </button>
            </div>
            <!-- Add Modal -->
            <div class="modal fade" id="addComment" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Add new Comment</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"
                                aria-label="Close"></button>
                        </div>
                        <form action="{{ route('comments.store') }}" method="POST">
                            @csrf
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="postId" class="form-label">Post ID</label>
                                    <input name="postId" class="form-control" id="postId"
                                        value="{{ $post->id }}" readonly>
                                </div>
                                <div class="mb-3">
                                    <label for="body" class="form-label">Type whats on your mind..</label>
                                    <textarea name="body" class="form-control" id="body" rows="3"></textarea>
                                </div>
                                <select name="comment_creator" class="form-select mb-3"
                                    aria-label="Default select example">
                                    <option selected>Select User</option>
                                    @foreach ($users as $user)
                                        <option value="{{ $user->id }}">{{ $user->name }}</option>
                                    @endforeach
                                </select>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">No</button>
                                <button type="submit" class="btn text-white"
                                    style="background-color: #718470">Add</button>
                            </div>
                        </form>
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
