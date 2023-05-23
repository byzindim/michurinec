<?php

class Admin{

    //...

    public function startGulpProcess()
    {
        $gulpProcess = new GulpProcess();
        return $gulpProcess->start();
    }

    public function stopGulpProcess()
    {
        $gulpProcess = new GulpProcess();
        return $gulpProcess->stop();
    }

    public function getGulpStatus()
    {
        $gulpProcess = new GulpProcess();
        $this->jsonData["is_active"] = $gulpProcess->isActive();
        return true;
    }
}