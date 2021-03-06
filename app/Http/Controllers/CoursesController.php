<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Cours;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class CoursesController extends Controller
{

    public function  create(Request $request){

         $validator = Validator::make($request->all(), [
            'name' => 'required',
            'module_id' => 'required',
            'description' => 'required',
            'prerequisite' => 'required',
            'difficulty_level' => 'required',
         ]);
         if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 404);
         }
         $path = $request->file('file')->storePublicly('files');
         $course = Cours::create([
            'name' => $request->get('name'),
            'module_id' => $request->get('module_id'),
            'description' => $request->get('description'),
            'prerequisite' => $request->get('prerequisite'),
            'difficulty_level' => $request->get('difficulty_level'),
            'document_path' => $path,
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

    public function download($id){
      // find with Id AND return ID
        $course = Cours::find($id);
        return Storage::download($course->document_path);
     }

    // fUNCTION UPDATE 
    public function edit(Request $request , $id){
       $course = Cours::find($id);
       $course->name = $request->name;
       $course->module_id = $request->module_id;
       $course->description = $request->description;
       $course->prerequisite = $request->prerequisite;
       $course->difficulty_level = $request->difficulty_level;
       $course->save();
       return response()->json(['message'=>'saved']);

    }

    // FUNCTION DELET 
    public function destroy($id){

        $course = Cours::find($id);
        Storage::delete($course->document_path);
        $course->delete();
        return response()->json(['message'=>'created']);
     
    }

}