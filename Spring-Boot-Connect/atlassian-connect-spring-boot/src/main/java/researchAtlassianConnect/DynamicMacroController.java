package researchAtlassianConnect;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.Base64;

@Controller
public class DynamicMacroController {

    final String JPEG_PATH = "C:/YOUR_PATH/research-atlassian-connect/Spring-Boot-Connect/atlassian-connect-spring-boot/src/main/resources/falloutVaultBoyThumbsUp.jpg";
    final String SVG_PATH = "C:/YOUR_PATH/research-atlassian-connect/Spring-Boot-Connect/atlassian-connect-spring-boot/src/main/resources/kiwi.svg";

    // Macro that returns a html where the current date and time is shown
    @GetMapping("/spring/macro/dynamic/date-time")
    public String dateTime() {
        return "macro/dynamic/dateTime";
    }


    // Macro which converts a local stored image to base64 and displays it on the returned html file
    @GetMapping("/spring/macro/dynamic/image-to-base64")
    public String imageToBase64(Model model) {

        File file = new File(JPEG_PATH);

        String base64String = null;
        try {
            FileInputStream fileInputStreamReader = new FileInputStream(file);
            byte[] bytes = new byte[(int) file.length()];
            fileInputStreamReader.read(bytes);
            base64String = Base64.getEncoder().encodeToString(bytes);
            model.addAttribute("base64String", base64String);
        } catch (IOException e) {

        }

        return "macro/dynamic/imageToBase64";
    }

    // Macro to display a locally stored svg image
    @GetMapping("/spring/macro/dynamic/display-svg")
    public String displaySvg(Model model) {

        try{
            byte[] encodedFile = Files.readAllBytes(Paths.get(SVG_PATH));
            String svg = new String(encodedFile, StandardCharsets.UTF_8);

            model.addAttribute("svg", svg);
        } catch (IOException e){

        }

        return "macro/dynamic/displaySvg";
    }
}
