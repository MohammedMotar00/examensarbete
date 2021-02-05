<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Yone;

class YoneController extends Controller
{
  // $shen->items = $request->items['starting'];
  public function store(Request $request)
  {
    $yone = new Yone();
    $yone->title = $request->title;
    $yone->items = $request->items;
    $yone->save();

    return response()->json($yone);
  }

  public function index()
  {
    $yone = Yone::all();

    return response()->json($yone);
  }
}