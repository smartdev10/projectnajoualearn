<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;

class Module_Controller extends Controller
{
    public function  creat_model(Request $request)
    {

        $validator = Model::make($request->all(), [
           'name' => 'required',
        ]);
        if ($validator->fails()) {
           return response()->json(['error'=>$validator->errors()], 404);
        }
        $model= Model::create([
           'name' => $request->get('name'),
        ]);
        $model->save(); 
        return response()->json(['messages'=>'created']);
   }

    // Function return Object
   public function formations()
   {
       return  Model::all();
   }

   // MODEL Show Contenet
   public function show($id)
   {
         $model = Model::find($id);
         return $model;
   }

   // MODEL UPDATE
   public function edit($id){
      $model = Model::find($id);
      return $model;
   }

   // MODEL DELET 
   public function destroy($id){
       $model = Model::find($id);
       $model->delete();
       return response()->json(['messages'=>'deleted']);
   }





}
