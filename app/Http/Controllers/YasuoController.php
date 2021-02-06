<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Yasuo;

class YasuoController extends Controller
{
  public function store(Request $request)
  {
    $yasuo = new Yasuo();
    $yasuo->title = $request->title;
    $yasuo->items = $request->items;
    $yasuo->save();

    return response()->json($yasuo);
  }

  public function index()
  {
    $yasuo = Yasuo::all();

    return response()->json($yasuo);
  }

  public function show($id)
  {
    $yasuo = Yasuo::findOrFail($id);

    return response()->json($yasuo);
  }
}