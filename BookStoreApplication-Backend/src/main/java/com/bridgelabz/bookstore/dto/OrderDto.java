package com.bridgelabz.bookstore.dto;

public class OrderDto {
	
	private Long orderId;
	
	private String orderStatus;
	private Double totalPrice;
	private String address;

	public OrderDto(Long orderId, String orderStatus, Double totalPrice, String address, String city) {
		this.orderId = orderId;
		this.orderStatus = orderStatus;
		this.totalPrice = totalPrice;
		this.address = address;
		this.city = city;
	}

	private String city;

	public Double getTotalPrice() {
		return totalPrice;
	}

	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public OrderDto(Long orderId, String orderStatus) {
		this.orderId = orderId;
		this.orderStatus = orderStatus;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}
}
