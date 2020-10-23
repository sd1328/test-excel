<?php
namespace App\Http\Requests\Excel;

use Illuminate\Foundation\Http\FormRequest;

/**
 * Class TableForm
 * @package App\Http\Requests\Excel
 */
class TableForm extends FormRequest
{
    /**
     * Определите, авторизован ли пользователь сделать этот запрос.
     * @return bool
     */
    public function authorize()
    {
        return true;    // разрешить
    }

    /**
     * Правила валидации
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string|max:255',
        ];
    }
}
