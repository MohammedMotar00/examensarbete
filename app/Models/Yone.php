<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Yone extends Model
{
  use HasFactory;
  protected $table = 'yone';
  protected $fillable = ['username', 'title', 'items', 'image'];
  protected $casts = [
    'items' => 'array'
  ];
}