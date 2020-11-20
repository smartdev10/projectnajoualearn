<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cours;
use Illuminate\Support\Facades\Validator;

class CoursesController extends Controller
{

    public function  create(Request $request){

         $validator = Validator::make($request->all(), [
            'name' => 'required',
         ]);
         if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 404);
         }
         $course = Cours::create([
            'name' => $request->get('name'),
         ]);
         $course->save(); 
         return response()->json(['message'=>'created']);
    }

    public function courses(){
        return  Cours::all();
    }
    // function Show Contenet
    public function show($id){
        // find with Id AND return ID
          $course = Cours::find($id);
          return $course;
    }

    // fUNCTION UPDATE 
    public function edit(Request $request , $id){
       $course = Cours::find($id);
       $course->name = $request->name;
       $course->save();
       return response()->json(['message'=>'saved']);

    }

    // FUNCTION DELET 
    public function destroy($id){

        $course = Cours::find($id);
        $course->delete();
        return response()->json(['message'=>'created']);
     
    }

}