<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ModuleController extends Controller
{
    public function  create(Request $request)
    {

        $validator = Validator::make($request->all(), [
           'name' => 'required',
           'description' => 'required'
        ]);
        if ($validator->fails()) {
           return response()->json(['error'=>$validator->errors()], 404);
        }
        $model= Module::create([
           'name' => $request->get('name'),
           'description' => $request->get('description'),
        ]);
        $model->save(); 
        return response()->json(['message'=>'created']);
   }

    // Function return Object
   public function modules()
   {
       return  Module::all();
   }

   // MODEL Show Contenet
   public function show($id)
   {
      $model = Module::find($id);
      return $model;
   }

   // MODEL UPDATE
   public function edit(Request $request  , $id){
      $formation = Module::find($id);
      $formation->name = $request->name;
      $formation->description = $request->description;
      $formation->save();
      return response()->json(['message'=>'saved']);
   }

   // MODEL DELET 
   public function destroy($id){
       $model = Module::find($id);
       $model->delete();
       return response()->json(['messages'=>'deleted']);
   }





}
