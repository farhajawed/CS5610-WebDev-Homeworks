package com.example.whiteboardfall2018farhajawedserverjava.models;

import javax.persistence.Entity;

@Entity
public class HeadingWidget extends Widget{
	
	public HeadingWidget() {
		
	}

	private String size;
	
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	
	@Override
	public void set(Widget newWidget) {
		super.set(newWidget);
		this.size = ((HeadingWidget) newWidget).size;
	}
}
