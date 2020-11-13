<?php

namespace App\Http\Controllers;

use App\Models\Module;
use Illuminate\Http\Request;

class Module_Controller extends Controller
{
    public function  creat_model(Request $request)
    {

        $validator = Module::make($request->all(), [
           'name' => 'required',
        ]);
        if ($validator->fails()) {
           return response()->json(['error'=>$validator->errors()], 404);
        }
        $model= Module::create([
           'name' => $request->get('name'),
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
   public function edit($id){
      $model = Module::find($id);
      return $model;
   }

   // MODEL DELET 
   public function destroy($id){
       $model = Module::find($id);
       $model->delete();
       return response()->json(['messages'=>'deleted']);
   }





}
