<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\FormateurRoom;
use App\Models\FormateurMessage;
use Illuminate\Support\Facades\Validator;

class DepartementController extends Controller
{

    public function  creat_departement(Request $request){

         $validator = Validator::make($request->all(), [
            'name' => 'required',
         ]);
         if ($validator->fails()) {
            return response()->json(['error'=>$validator->errors()], 404);
         }
         $departement = FormateurMessage::create([
            'name' => $request->get('name'),
         ]);
         $departement->save(); 
         return response()->json(['message'=>'created']);
    }

    public function departements(){
        return  FormateurRoom::all();
    }
    // function Show Contenet
    public function show($id){
        // find with Id AND return ID
          $departement = FormateurMessage::find($id);
          return $departement;
    }

    // fUNCTION UPDATE 
    public function edit(Request $request , $id){
       $departement = FormateurMessage::find($id);
       $departement->name = $request->name;
       $departement->save();
       return response()->json(['message'=>'saved']);

    }

    // FUNCTION DELET 
    public function destroy($id){

        $departement = FormateurMessage::find($id);
        $departement->delete();
        return response()->json(['message'=>'created']);
     
    }

}