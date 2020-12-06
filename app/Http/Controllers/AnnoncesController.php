<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Annonce;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Validator;

class AnnoncesController extends Controller
{

     public function create(Request $request){

         $validator = Validator::make($request->all(), [
            'name' => 'required',
            'formation_id' => 'required',
            'description' => 'required',
         ]);
         if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 400);
         }
         $path = $request->file('file')->storePublicly('annonces');
         $course = Annonce::create([
            'name' => $request->get('name'),
            'formation_id' => $request->get('formation_id'),
            'description' => $request->get('description'),
            'attached_doc' => $path,
            'duration' => "1 DAY",
         ]);
         $course->save(); 
         return response()->json(['message'=>'created']);
    }

    public function annonces(){
        return  Annonce::all();
    }
    // function Show Contenet
    public function show($id){
        // find with Id AND return ID
          $course = Annonce::find($id);
          return $course;
    }

    // fUNCTION UPDATE 
    public function edit(Request $request , $id){
       $course = Annonce::find($id);
       $course->name = $request->name;
       $course->formation_id = $request->formation_id;
       $course->description = $request->description;
       $course->attached_doc = $request->attached_doc;
       $course->duration = $request->duration;
       $course->save();
       return response()->json(['message'=>'saved']);

    }

    // FUNCTION DELET 
    public function destroy($id){

        $course = Annonce::find($id);
        Storage::delete($course->attached_doc);
        $course->delete();
        return response()->json(['message'=>'created']);
     
    }

}