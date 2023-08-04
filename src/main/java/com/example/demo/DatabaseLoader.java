package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final InstrumentoRepository repository;

	@Autowired
	public DatabaseLoader(InstrumentoRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Instrumento("Guitarra", "Cuerda", "de madera"));
		this.repository.save(new Instrumento("Ukelele", "Cuerda", "caja de resonancia pequeña"));
		this.repository.save(new Instrumento("Melodica", "Viento", "Teclado de 4 cuerdas"));
	}
}