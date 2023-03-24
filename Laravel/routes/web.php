<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\CommentController;
use Illuminate\Support\Facades\Route;
use  Illuminate\Support\Facades\Auth;


/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/posts', [PostController::class, 'index'])->name('posts.index');


Route::group(['middleware' => ['auth']], function () {
    //posts
    Route::get('/posts/create', [PostController::class, 'create'])->name('posts.create');

    Route::get('/posts/{id}/edit', [PostController::class, 'edit'])->name('posts.edit');

    Route::get('/posts/{id}', [PostController::class, 'show'])->name('posts.show');

    Route::post('/posts', [PostController::class, 'store'])->name('posts.store');

    Route::post('/posts/{id}', [PostController::class, 'update'])->name('posts.update');

    Route::delete('/posts/{id}', [PostController::class, 'destroy'])->name('posts.destroy');

    Route::get('/posts/delete', [PostController::class, 'deletePostsFromTwoYears'])->name('posts.deletePostsFromTwoYears');

    //comments
    Route::post('/comments', [CommentController::class, 'store'])->name('comments.store');

    Route::delete('/comments/{id}', [CommentController::class, 'destroy'])->name('comments.destroy');

    Route::post('/comments/{id}', [CommentController::class, 'update'])->name('comments.update');
});

Route::get('logout', function () {
    auth()->logout();
    Session()->flush();
    return redirect()->route('posts.index');
})->name('logout');

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
