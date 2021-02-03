<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Shen;

class ShenController extends Controller
{
  //

  public function store(Request $request)
  {
    $shen = new Shen;
    $shen->title = $request['title'];

    return $shen;
  }
}