<?php
namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

/**
 * Class AbstractApiRequests
 * @package App\Http\Requests
 */
class ApiRequests extends FormRequest
{
    /**
     * Если валидация не прошла выкидываем исключение с ошыбками валидации
     * @param Validator $validator
     */
    protected function failedValidation(Validator $validator): void
    {
        throw new HttpResponseException(
            response()
                ->json($validator->errors(), 422)
        );
    }
}
