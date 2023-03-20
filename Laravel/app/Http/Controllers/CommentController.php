<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(Request $request)
    {

        $body = $request->body;
        $postId = $request->postId;
        $comment_creator  = $request->comment_creator;

        Comment::create([
            'body' => $body,
            'user_id' => $comment_creator,
            'commentable_id' => $postId,
            'commentable_type' => "App\Models\Post"
        ]);

        return redirect()->back();
    }

    public function update(Request $request, $id)
    {
        $body = $request->body;
        $comment_creator  = $request->comment_creator;

        Comment::where('id', $id)
            ->update([
                'body' => $body,
                'user_id' => $comment_creator,
            ]);
        return redirect()->back();
    }

    public function destroy($id)
    {
        Comment::destroy($id);
        return redirect()->back();
    }
}
