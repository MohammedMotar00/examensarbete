<?php

namespace App\Models;

// use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Shen extends Model
{
  // use HasFactory;

  protected $table = 'shen';
  protected $fillable = ['username', 'title', 'items'];
  protected $casts = [
    'items' => 'array'
  ];
}