<?php

function printOdd($fact)
{
    for ($i = 0; $i <= $fact; $i++) {
        if ($i % 2 != 0) {
            var_dump($i);
        }
    }
}

printOdd(45);

?>
