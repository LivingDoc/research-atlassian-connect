package researchAtlassianConnect;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.time.LocalTime;

@Controller
public class StaticMacroController {

    @GetMapping("/macro/static/dateTime-macro")
    public String DateTimeMacro(Model model) {
        addDateAndTime(model);
        return "staticDateTimeMacro";
    }

    @RequestMapping(value="/macro/static/hello-world-macro", params = {"thisWorld", "personName", "pageTitle"})
    public String helloWorldMacro(Model model
        , @RequestParam(value = "thisWorld") String thisWorld
        , @RequestParam(value = "personName") String personName
        , @RequestParam(value = "pageTitle") String pageTitle)
    {
        model.addAttribute("thisWorld", thisWorld);
        model.addAttribute("personName", personName);
        model.addAttribute("pageTitle", pageTitle);
        return "staticHelloWorldMacro";
    }

    private void addDateAndTime(Model model) {
        LocalDate localDate = LocalDate.now();
        LocalTime localTime = LocalTime.now();

        model.addAttribute("localDate", localDate);
        model.addAttribute("localTime", localTime);
    }
}


