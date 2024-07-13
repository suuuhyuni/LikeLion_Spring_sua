package LikeLionJpa.Jpa_likelion;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JpaLikelionApplication {

	public static void main(String[] args) {
		Lombok lombok = new Lombok();
		lombok.setData("string");
		String data = lombok.getData();
		System.out.print("Hello = " + data);

		SpringApplication.run(JpaLikelionApplication.class, args);
	}

}
