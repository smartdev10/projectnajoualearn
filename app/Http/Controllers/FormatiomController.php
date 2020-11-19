<?php

namespace App\Http\Controllers;

use App\Models\Formation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FormatiomController extends Controller
{

    public function  creat_formation(Request $request)
    {

        $validator = Validator::make($request->all(), [
           'name' => 'required',
           'module_id' => 'required',
        ]);
        if ($validator->fails()) {
           return response()->json(['error'=>$validator->errors()], 404);
        }
        $formation= Formation::create([
           'name' => $request->get('name'),
           'module_id' => $request->get('module_id'),
        ]);
        $formation->save(); 
        return response()->json(['message'=>'created']);
   }

    // Function return Object
   public function formations()
   {
       return Formation::all();
   }

   // Function Show Contenet
   public function show($id)
   {
      $formation = Formation::find($id);
      return $formation;
   }

   // fUNCTION UPDATE 
   public function edit(Request $request  , $id){
      $formation = Formation::find($id);
      $formation->name = $request->name;
      $formation->module_id = $request->module_id;
      $formation->save();
      return response()->json(['message'=>'saved']);

   }

   // FUNCTION DELET 
   public function destroy($id){
       $formation = Formation::find($id);
       $formation->delete();
       return response()->json(['message'=>'deleted']);
   }
       
}
