<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Yasuo extends Model
{
  use HasFactory;
  protected $table = 'yasuo';
  protected $fillable = ['username', 'title', 'items', 'image'];
  protected $casts = [
    'items' => 'array'
  ];
}