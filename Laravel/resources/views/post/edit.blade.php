@extends('layouts.app')

@section('title') edit post @endsection

@section('content')
<section>
    <div class="container w-75 p-5 border shadow-lg rounded-5" style="margin-top: 100px;">
        <h1 class="mb-5 text-center">Edit Post</h1>
        <form   action="{{route('posts.update',$post->id)}}" method="POST"  class="border shadow-sm rounded-3 p-5">
            @csrf
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input name="title" type="text" class="form-control" id="title">
            </div>
            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea name="description" class="form-control" id="description" rows="3">{{$post->description}}</textarea>
            </div>
            
            <select name="post_creator" class="form-select mb-3" aria-label="Default select example">
                <option selected>Select User</option>
                @foreach ($users as $user)
                    <option value="{{$user->id}}">{{$user->name}}</option>
                @endforeach
            </select>

            <button type="submit" class="btn text-white px-5 mt-3" style="background-color: #718470">Update</button>
        </form>
    </div>
</section>

<script>
    document.getElementById("title").defaultValue = @json($post->title)
</script>
@endsection
