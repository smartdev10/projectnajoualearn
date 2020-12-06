<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StudentsRoom extends Model
{
    use HasFactory;

    public function student_messages()
    {
        return $this->hasMany('App\Models\StudentsMessage');
    }
}
