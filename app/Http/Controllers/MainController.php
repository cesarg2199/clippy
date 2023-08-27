<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;

class MainController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function index(Request $request): Response
    {
        return inertia('Main');
    }
}


