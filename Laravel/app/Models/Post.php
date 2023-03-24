<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Cviebrock\EloquentSluggable\Sluggable;

class Post extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'title',
        'description',
        'user_id',
        'image'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function comment()
    {
        return $this->morphMany(Comment::class, 'commentable');
    }
    public function sluggable(): array
    {
        return [
            'slug' => [
                'source' => 'title',
                'slug_field' => 'slug', // the column to use as the slug field
                'unique' => true // ensure that the slug is unique
            ]
        ];
    }
}
