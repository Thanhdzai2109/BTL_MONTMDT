package com.bridgelabz.bookstore.response;

import com.bridgelabz.bookstore.entity.Users;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;

import java.util.List;

public class UserResponse {

	private String Message;
	private HttpStatus status;
	private Object obj;
	private List<Users>users;







	public UserResponse(String message, Object obj) {
		super();
		Message = message;
		this.obj = obj;
	}



	public UserResponse(String message, Object obj, HttpStatus status) {
		super();
		this.status = status;
		Message = message;
		this.obj = obj;
	}

	public List<Users> getUsers() {
		return users;
	}

	public UserResponse(String message, List<Users> users) {
		Message = message;
		this.users = users;
	}

	public void setUsers(List<Users> users) {
		this.users = users;
	}

	public String getMessage() {
		return Message;
	}


	public void setMessage(String message) {
		Message = message;
	}


	public HttpStatus getStatus() {
		return status;
	}


	public void setStatus(HttpStatus status) {
		this.status = status;
	}


	public Object getObj() {
		return obj;
	}


	public void setObj(Object obj) {
		this.obj = obj;
	}
	
	
}
