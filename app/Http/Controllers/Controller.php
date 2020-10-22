<?php

namespace App\Http\Controllers;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

/**
 * Class Controller
 * @OA\Info(
 *     title="Тест - Web Excel API",
 *     version="1.0",
 *     description="Тестовое задание - редактор таблиц онлайн"
 * ),
 *
 * @OA\Get(
 *     path="/",
 *     description="Home page",
 *     @OA\Response(response="default", description="Welcome page")
 * )
 *
 * @OA\Schema(
 *     schema="ValidationError",
 *     @OA\Property(property="field", type="array", description="error", example={"You have some error by field"},
 *          @OA\Items(
 *              @OA\Schema(type="string", example="You have some error by field")
 *          )
 *      )
 * ),
 *
 * @package App\Http\Controllers
 */
class Controller extends BaseController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
