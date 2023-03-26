<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePostRequest;
use App\Http\Resources\PostResource;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index()
    {
        $allPosts = Post::with('user')->paginate(3);
        return PostResource::collection($allPosts);
    }

    public function show($id)
    {
        if (is_numeric($id)) {

            $post = Post::where('id', $id)->first();

            return new PostResource($post);
        }
    }

    public function store(StorePostRequest $request)
    {

        $postData = [];
        $postData['title'] =  $request->title;
        $postData['description'] =  $request->description;
        $postData['user_id'] =  $request->post_creator;
        if ($request->hasFile('image')) {
            $postData['image'] = $request->file('image')->store('public');
        }

        $post = Post::create($postData);
        return new PostResource($post);
    }
}
