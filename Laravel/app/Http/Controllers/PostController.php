<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{

    public function index()
    {
        $allPosts = Post::paginate(7);
        return view('post.index', ['posts' => $allPosts]);
    }

    public function show($id)
    {
        if (is_numeric($id)) {

            $post = Post::where('id', $id)->first();
            $comments = $post->comment()->paginate(3);
            $users = User::all();
            return view('post.show', ['post' => $post, 'comments' => $comments, 'users' => $users]);
        }
    }

    public function edit($id)
    {
        if (is_numeric($id)) {
            $post = Post::where('id', $id)->first();
            $users = User::all();
            return view('post.edit', ['post' => $post, 'users' => $users]);
        }
    }

    public function update(UpdatePostRequest $request, $id)
    {
        $post = Post::where('id', $id)->first();
        $postData = [];
        $postData['title'] =  $request->title;
        $postData['description'] =  $request->description;
        $postData['user_id'] =  $request->post_creator;

        if ($request->hasFile('image')) {
            if ($post->image) {
                if (Storage::exists($post->image)) {
                    Storage::delete($post->image);
                }
            }
            $postData['image'] = $request->file('image')->store('public');
        }

        Post::where('id', $id)->update($postData);

        return redirect()->route('posts.show', $id);
    }


    public function create()
    {
        $users = User::all();

        return view('post.create', ['users' => $users]);
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

        Post::create($postData);
        return redirect()->route('posts.index');
    }

    public function destroy($id)
    {
        $post = Post::where('id', $id)->first();
        if ($post->image) {
            if (Storage::exists($post->image)) {
                Storage::delete($post->image);
            }
        }
        Post::destroy($id);
        return redirect()->route('posts.index');
    }
}
