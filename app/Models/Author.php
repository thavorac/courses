<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;
    protected $table = 'authors';
    protected $fillable = [
        'name',
    ];

    public function posts() {
      return $this->hasMany(Post::class);
    }
    public function phone() {
      return $this->hasOne(Phone::class);
    }
    public function nationalities() {
      return $this->belongsToMany(Nationality::class);
    }
}
