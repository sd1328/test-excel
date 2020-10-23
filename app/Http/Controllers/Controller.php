<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * Class Controller
 *
 * @package App\Http\Controllers
 */
class Controller extends BaseController
{
    use ValidatesRequests;

    protected $hasGuest = false;

    /**
     * Controller constructor.
     */
    public function __construct()
    {
        if (!$this->hasGuest) {
            $this->middleware('auth');
        }
    }
}
