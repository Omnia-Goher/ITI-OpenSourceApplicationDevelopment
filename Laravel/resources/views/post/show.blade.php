@extends('layouts.app')

@section('title') view post details @endsection

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
                    <p><cite title="Source Title">{{ $post['title'] }}</cite></p>
                    <footer class="blockquote-footer">Description : <cite
                            title="Source Title">{{ $post['description'] }}</cite></footer>
                </blockquote>
            </div>
        </div>
        <div class="card border rounded-3 m-5">
            <div class="card-header fs-4">
                Post Creator Info
            </div>
            <div class="card-body">
                <blockquote class="blockquote mb-0">
                    <p>Name : <cite title="Source Title">{{ $post['posted_by'] }}</cite> </p>
                    {{--                         <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
 --}}
                </blockquote>
            </div>
        </div>
    </div>
</section>
@endsection