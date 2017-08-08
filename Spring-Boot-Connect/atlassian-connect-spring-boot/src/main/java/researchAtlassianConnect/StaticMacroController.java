package researchAtlassianConnect;


import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.time.LocalDate;
import java.time.LocalTime;

@Controller
public class StaticMacroController {

    // Macro that returns a html where the current date and time is shown
    @GetMapping("/spring/macro/static/date-time")
    public String dateTime(Model model) {
        addDateAndTime(model);
        return "macro/static/dateTime";
    }

    private void addDateAndTime(Model model) {
        LocalDate localDate = LocalDate.now();
        LocalTime localTime = LocalTime.now();

        model.addAttribute("localDate", localDate);
        model.addAttribute("localTime", localTime);
    }

    // Macros with three paramaters 'thisWorld' and 'personName' are required params the user have to choose
    @GetMapping("/spring/macro/static/hello-world")
    public String helloWorld( Model model
        , @RequestParam String thisWorld
        , @RequestParam String personName
        , @RequestParam String pageTitle )
    {
        model.addAttribute("thisWorld", thisWorld);
        model.addAttribute("personName", personName);
        model.addAttribute("pageTitle", pageTitle);

        return "macro/static/helloWorld";
    }

}


