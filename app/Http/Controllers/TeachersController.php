<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Models\Formateur;
use Illuminate\Http\Request;

class TeachersController extends Controller
{
    //

    public function  create(Request $request){

        $validator = Validator::make($request->all(), [
           'name' => 'required',
        ]);
        if ($validator->fails()) {
           return response()->json(['error'=>$validator->errors()], 400);
        }
        $student = Formateur::create([
           'name' => $request->get('name'),
           'email' => $request->get('email'),
           'student_password' => $request->get('student_password'),
        ]);
        $student->save(); 
        return response()->json(['message'=>'created']);
   }

   public function teachers(){
       return  Formateur::all();
   }
   // function Show Contenet
   public function show($id){
       // find with Id AND return ID
         $departement = Formateur::find($id);
         return $departement;
   }

   // fUNCTION UPDATE 
   public function edit(Request $request , $id){
      $departement = Formateur::find($id);
      $departement->name = $request->name;
      $departement->save();
      return response()->json(['message'=>'saved']);

   }

   // FUNCTION DELET 
   public function destroy($id){

       $departement = Formateur::find($id);
       $departement->delete();
       return response()->json(['message'=>'created']);
    
   }
}
