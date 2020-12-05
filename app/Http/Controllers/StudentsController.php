<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Validator;
use App\Models\Student;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    //

    public function  creat_user(Request $request){

        $validator = Validator::make($request->all(), [
           'name' => 'required',
        ]);
        if ($validator->fails()) {
           return response()->json(['error'=>$validator->errors()], 400);
        }
        $student = Student::create([
           'name' => $request->get('name'),
           'email' => $request->get('email'),
           'student_password' => $request->get('student_password'),
        ]);
        $student->save(); 
        return response()->json(['message'=>'created']);
   }

   public function users(){
       return  Student::all();
   }
   // function Show Contenet
   public function show($id){
       // find with Id AND return ID
         $departement = Student::find($id);
         return $departement;
   }

   // fUNCTION UPDATE 
   public function edit(Request $request , $id){
      $departement = Student::find($id);
      $departement->name = $request->name;
      $departement->save();
      return response()->json(['message'=>'saved']);

   }

   // FUNCTION DELET 
   public function destroy($id){

       $departement = Etudiant::find($id);
       $departement->delete();
       return response()->json(['message'=>'created']);
    
   }
}
