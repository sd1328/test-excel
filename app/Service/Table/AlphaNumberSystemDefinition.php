<?php
namespace App\Service\Table;

/**
 * Class AlphaNumberSystemDefinition
 *
 * Определение символьной системы числения
 * - для Excel подобной системы идентификации колонок:  A - 1, B - 2, AA - 27
 * - счет начиная с 1
 *
 * @package App\Service\Table
 */
class AlphaNumberSystemDefinition
{
    /**
     * @var array - алфавит системы числения
     */
    protected static $alphabet = [
        1 => 'a',
        2 => 'b',
        3 => 'c',
        4 => 'd',
        5 => 'e',
        6 => 'f',
        7 => 'g',
        8 => 'h',
        9 => 'i',
        10 => 'j',
        11 => 'k',
        12 => 'l',
        13 => 'm',
        14 => 'n',
        15 => 'o',
        16 => 'p',
        17 => 'q',
        18 => 'r',
        19 => 's',
        20 => 't',
        21 => 'u',
        22 => 'v',
        23 => 'w',
        24 => 'x',
        25 => 'y',
        26 => 'z',
    ];

    /**
     * Преобразовать символьное представление столбца в эго номер (начиная с 1)
     * @param string $alpha
     * @return int
     */
    public static function getNumberByAlpha(string $alpha): int
    {
        $alpha = strtolower($alpha);
        $numberRanks = strlen($alpha);
        $number = 0;
        foreach (str_split($alpha) as $char) {
            $numberRanks--;
            $charNum = self::getReverseAlphabet($char);
            if ($numberRanks) {
                $number = $number + pow(26, $numberRanks) * $charNum;
            } else {
                $number = $number + $charNum;
            }
        }
        return $number;
    }

    /**
     * Получить символьное представление столбца из эго номера
     * @param int $number
     * @return string
     */
    public static function getAlphaByNumber(int $number): string
    {
        $alpha = [];
        while ($number > 26) {
            $modulo = $number % 26;
            $alpha[] = self::getAlphabet($modulo);
            $number = ($number - $modulo) / 26;
        }
        $alpha[] = self::getAlphabet($number);
        return implode('', array_reverse($alpha));
    }

    /**
     * @param string $char
     * @return int
     */
    protected static function getReverseAlphabet(string $char): int
    {
        static $reverseAlphabet;
        if (!$reverseAlphabet) {
            $reverseAlphabet = array_flip(self::$alphabet);
        }

        if (isset($reverseAlphabet[$char])) {
            return $reverseAlphabet[$char];
        } else {
            throw new \InvalidArgumentException("Недопустимый символ идентификатора колонки [$char]");
        }
    }

    /**
     * @param int $num
     * @return string
     */
    protected static function getAlphabet(int $num): string
    {
        if (isset(self::$alphabet[$num])) {
            return self::$alphabet[$num];
        } else {
            throw new \InvalidArgumentException("Недопустимый индекс идентификатора колонки [$num]");
        }
    }
}
