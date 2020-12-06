<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentsMessage extends Model
{
    use HasFactory;

    public function student_room()
    {
        return $this->belongsTo('App\Models\StudentsRoom');
    }
}
