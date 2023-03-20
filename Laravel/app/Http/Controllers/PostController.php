<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;

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

    public function update(Request $request, $id)
    {
        $title = $request->title;
        $description = $request->description;
        $postCreator = $request->post_creator;

        Post::where('id', $id)
            ->update([
                'title' => $title,
                'description' => $description,
                'user_id' => $postCreator
            ]);
        return redirect()->route('posts.show', $id);
    }


    public function create()
    {
        $users = User::all();

        return view('post.create', ['users' => $users]);
    }


    public function store(Request $request)
    {

        $title = $request->title;
        $description = $request->description;
        $postCreator  = $request->post_creator;

        Post::create([
            'title' => $title,
            'description' => $description,
            'user_id' => $postCreator
        ]);
        return redirect()->route('posts.index');
    }

    public function destroy($id)
    {
        Post::destroy($id);
        return redirect()->route('posts.index');
    }
}
