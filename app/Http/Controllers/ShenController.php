<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Shen;

class ShenController extends Controller
{
  public function store(Request $request)
  {
    $shen = new Shen();
    // $shen->title = $request['title'];
    $shen->title = $request->title;
    $shen->image = $request->image;
    $shen->items = $request->items;
    // $shen->items = $request->items['starting'];
    $shen->save();

    return response()->json('success');
  }

  public function index()
  {
    $shen = Shen::all();

    return response()->json($shen);
  }

  public function show($id)
  {
    $shen = Shen::findOrFail($id);

    return response()->json($shen);
  }
}