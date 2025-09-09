# Use the latest stable Ruby
FROM ruby:3.4

# Install required system dependencies for Jekyll
RUN apt-get update -qq && \
    apt-get install -y build-essential nodejs && \
    rm -rf /var/lib/apt/lists/*

# Update Rubygems to the latest
RUN gem update --system

# Install bundler and jekyll globally
RUN gem install bundler jekyll

# Set working directory
WORKDIR /srv/jekyll

# Copy Gemfile and Gemfile.lock first to leverage Docker layer caching
COPY Gemfile Gemfile.lock ./

# Install dependencies
RUN bundle install

# Copy the rest of your project
COPY . .

# Expose the default Jekyll port
EXPOSE 4000

# Run Jekyll server with polling for file changes
CMD ["bundle", "exec", "jekyll", "serve", "--watch", "--force_polling", "--host", "0.0.0.0"]
